from pathlib import Path

import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
#####################################################

import io

import environ

# BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
env_file = os.path.join(BASE_DIR, ".env")


plumb = environ.Env()

if os.path.isfile(env_file):
    plumb.read_env(env_file)
else:
    # [START cloudrun_django_secretconfig]
    import google.auth
    from google.cloud import secretmanager

    _, project = google.auth.default()

    if project:
        client = secretmanager.SecretManagerServiceClient()

        SETTINGS_NAME = os.environ.get("SETTINGS_NAME", "django_settings")
        name = f"projects/{project}/secrets/{SETTINGS_NAME}/versions/latest"
        payload = client.access_secret_version(name=name).payload.data.decode(
            "UTF-8"
        )
    plumb.read_env(io.StringIO(payload))
    # [END cloudrun_django_secretconfig]


#####################################################
SECRET_KEY = os.getenv('SECRET_KEY')

DEBUG = True

ALLOWED_HOSTS = [] #['*']

INSTALLED_APPS = [
    'main_app',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True

ROOT_URLCONF = 'vying_app.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'vying_app.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'vying-database',
        'CLIENT': {
            'host': os.getenv('MONGO_CONNECT')
        },
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        # 'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnnly',
        'rest_framework.renderers.JSONRenderer'
    ]
}

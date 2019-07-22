from setuptools import setup, find_packages

with open("requirements.txt", "r") as requirements_file:
    packages = requirements_file.read().splitlines()

setup(
    name='butler',
    version='0.1.0',
    packages=find_packages("app/server/"),
    package_dir={"": "app/server"},
    url='https://gitlab.com/butler-for-meetings/butler',
    license='MIT',
    author='butler-for-meetings',
    author_email='',
    description='',
    entry_points={
        'console_scripts': [
            'butler=butler.server:production',
            'butler-develop=butler.server:develop'
        ]
    },
    install_requires=packages
)

from setuptools import setup, find_packages

setup(
    name='gtfs_calendar_editor',
    packages=find_packages(),
    include_package_data=True,
    # install_requires=[
    #     'Flask','flask-cors','mzgtfs'
    # ],
    tests_require=[
        'unittest',
    ],
)

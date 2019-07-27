"""
Atlassian class, atlassian products super.
"""

import logging
import logging.handlers


class Atlassian:
    @staticmethod
    def get_logger(logger_name):
        """
        Return a logger,
        :param logger_name:
        :return: logger.
        """
        logger = logging.getLogger(logger_name)
        logger.setLevel(logging.INFO)
        handler = logging.handlers.SysLogHandler(address='/dev/log')
        logger.addHandler(handler)
        return logger

    def _authenticate(self, basic_auth):
        """
        Should be writen in every product that inherit from this object.
        :param basic_auth:
        """
        raise NotImplementedError

    def authenticate_on_cloud(self, user, token):
        """
        :param user:
        :param token:
        """
        self._authenticate((user, token))

    def authenticate_on_localhost(self, user, password):
        """
        :param user:
        :param password:
        """
        self._authenticate((user, password))

    def __init__(self, url, logger_name):
        """
        :param url: site's url.
        :param logger_name: logger's name.
        """
        self._url = url
        self.logger = self.get_logger(logger_name)

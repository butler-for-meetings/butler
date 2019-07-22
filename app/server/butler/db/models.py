

if __name__ == '__main__':
    from mongoengine import connect
    connect(host='mongodb+srv://admin:@butler-mqkbs.azure.mongodb.net/test?retryWrites=true&w=majority')

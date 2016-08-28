#Address book

Simple address book application.

## Client side application technologies
- [Angular](https://angularjs.org/)

## Server side application technologies
- [Node.JS](https://nodejs.org/)
- [MongoDB](https://www.mongodb.org/)
- [Express](http://expressjs.com/)


## API

### Addresses

#### GET /api/v1/addresses
Get all addresses sorted by first and last name

Example:
```json
[
    {
        "_id": "55508a6b25c0d7e4092565d3",
        "firstName": "John",
        "lastName": "Smith",
        "phone": "+123456789",
        "email": "example@domain.net",
        "created": "2015-05-11T10:54:35.892Z",
        "updated": "2015-05-11T10:54:35.899Z"
    }
]
```

#### POST /api/v1/addresses
Create new address with the following fields

- firstName - required
- lastName
- phone
- email - valid email address

The result is the created document

```json
{
    "_id": "55508a6b25c0d7e4092565d3",
    "firstName": "John",
    "lastName": "Smith",
    "phone": "+123456789",
    "email": "example@domain.net",
    "created": "2015-05-11T10:54:35.892Z",
    "updated": "2015-05-11T10:54:35.899Z"
}
```

#### GET /api/v1/addresses/:id
Get one address, :id is a valid id

Example:
```json
{
    "_id": "55508a6b25c0d7e4092565d3",
    "firstName": "John",
    "lastName": "Smith",
    "phone": "+123456789",
    "email": "example@domain.net",
    "created": "2015-05-11T10:54:35.892Z",
    "updated": "2015-05-11T10:54:35.899Z"
}
```

#### PUT /api/v1/addresses/:id
Update the address with the given id
Fields are the same as for create API

Returns updated document

#### DELETE /api/v1/addresses/:id
Delete the address with the given id

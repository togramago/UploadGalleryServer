# UploadGalleryServer


*url*: https://polar-bastion-91741.herokuapp.com/images  


`GET /images?user_id={user_id}`  
returns all uploaded images for the user  
response: `[{"url": String, "created_at": timestamp}]`  
`$ curl 'https://polar-bastion-91741.herokuapp.com/images?user_id=100'`


`POST /images/{user_id}`  
uploads the image for the user id  
response: `{"url": String, "created_at": timestamp}`  
`$ curl -H "Content-Type: multipart/form-data" -F 'image=@dog.jpg' https://polar-bastion-91741.herokuapp.com/images/100`


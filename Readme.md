# Birdus

Daily 🐦 sightings from [http://www.irishbirding.com](http://www.irishbirding.com).

A lambda provides the data from irishbirding.com, saving to S3 and DynamoDB.  
Static web hosting is enabled on the S3 bucket along with CORS for `HEAD` and `GET`
 requests for local testing.

# Live version
https://birdus.s3-eu-west-1.amazonaws.com/index.html 

# Build instructions
Use Sencha CMD to build a minified app.  
`sencha app build`  
Upload to S3 using the AWS CLI.  
Re-upload only changed files as AWS monthly PUTs requests are only 20k.    
`aws s3 cp /build/ s3://birdus/`  

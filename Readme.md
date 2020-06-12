# Birdus

Daily 🐦 sightings from http://www.irishbirding.com.

AWS Lambda fetches the data from irishbirding.com, parses and saves to S3 and DynamoDB.  
Static webhosting is enabled on the S3 bucket along with *CORS* for `HEAD` and `GET`
 requests to allow for testing between local machine and S3.

# Live version
https://birdus.s3-eu-west-1.amazonaws.com/index.html 

## Tools

#### SenchaCmd
Use Sencha CMD to build a minified app.  
`sencha app build`


#### AWSCli

Upload the build folder to S3 using the AWS CLI
`aws s3 cp /build/ s3://birdus/`

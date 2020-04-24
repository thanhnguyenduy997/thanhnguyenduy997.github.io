## API

Base URL : https://system.dinos.click/api/v1/push-data

### 1. Post data

>METHOD: POST

>HEADER : “Authorization: Bearer {access_token}”

>BODY: 

    {	
        "name": "thanhtestzawa",
        "phone": "0986589123",
        "affiliate_network": "Zawa",
        "address": "Ha Noi"
    }

>RESPONSE:
>>1.Status: Error

    {
        "status": "error",
        "data": "Push data False!"
    }
        
>>1.Status: Success

    {
        "status": "success",
        "data": {
            "order_id":52904
        }
    }

#  

## Post back APIs

Base URL : https://system.dinos.click/api/v1/post-back-status

### 1. Processing

>METHOD: GET

>PARAMETER

    {	
    	"status": "hold",
    	"sub_id": "click_id"
    }

>BODY: NONE

>RESPONSE:
>>1.Status: Error

    {
        "status": "error",
        "data": "Request post back Fasle"
    }
        
>>1.Status: Success

    {
        "status": "success",
        "data": "Update Status Complete!"
    }

#  

### 2. Reject

>METHOD: GET

>PARAMETER

    {	
    	"status": "reject",
    	"sub_id": "click_id"
    }

>BODY: NONE

>RESPONSE:
>>1.Status: Error

    {
        "status": "error",
        "data": "Request post back Fasle"
    }
        
>>1.Status: Success

    {
        "status": "success",
        "data": "Update Status Complete!"
    }

#  

### 3. Confirm

>METHOD: GET

>PARAMETER

    {	
    	"status": "sale",
    	"sub_id": "click_id"
    }

>BODY: NONE

>RESPONSE:
>>1.Status: Error

    {
        "status": "error",
        "data": "Request post back Fasle"
    }
        
>>1.Status: Success

    {
        "status": "success",
        "data": "Update Status Complete!"
    }

#  

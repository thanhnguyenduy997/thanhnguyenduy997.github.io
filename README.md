## Post back APIs

Base URL : https://api.dinos.vn/api/v1/post_back_mosaic

### 1. Pending

>METHOD: POST

>PARAMETER

    {	
    	"status": "hold",
    	"conversion": "click_id",
        "note": "comment"
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
    	"conversion": "click_id",
        "note": "comment"
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
    	"conversion": "click_id",
        "note": "comment"
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

### 4. Processing

>METHOD: POST

>PARAMETER

    {	
    	"status": "processing",
    	"conversion": "click_id",
        "note": "comment"
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

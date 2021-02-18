$(document).ready(function(){
    var Buildings = [
        {
            name : 'Building 1',
            gym : false,
            school : true, 
            store : false
        },{
            name : 'Building 2',
            gym : true,
            school : false,
            store : false,
        },{
            name : 'Building 3',
            gym : true,
            school : true,
            store : false,
        },{
            name : 'Building 4',
            gym : false,
            school : true,
            store : false,
        },{
            name : 'Building 5',
            gym : false,
            school : true,
            store : true,
        },
    ]

    $("#submit").click(function(){

       var gym=[], school=[],store=[],gym_updated = [],school_updated=[],store_updated=[],inputArray = [];
       
        console.log(jQuery.type(Buildings[1].gym));
        for(var j = 0;j<Buildings.length;j++){
            if(Buildings[j].gym){
                gym.push(1);
            }
            else{
                gym.push(0);
            }

            if(Buildings[j].school){
                school.push(1);
            }
            else{
                school.push(0);
            }

            if(Buildings[j].store){
                store.push(1);
            }
            else{
                store.push(0);
            }
        }
        

        function generateDistance(a){
            console.log(a)
            var b = [];
           
            for(i = 0;i<a.length;i++){
                var tempContinue = 0;
                if(a[i]!=1){
                    for(k = i;k<a.length;k++){
                        if(a[k]==1 && tempContinue == 0){
                            b.push(k-i);
                            tempContinue = 1
                        }
                    }
                    if(tempContinue == 0) {
                        for(k=i-1;k>0;k--){
                            if(a[k]==1&& tempContinue == 0){
                                b.push(i-k);
                                tempContinue = 1
                            }
                        }
                    }
                }
                else{
                    b.push(0);
                }
            }
            console.log(a);
            return b;
    
        }

        gym_updated = generateDistance(gym);
        school_updated = generateDistance(school);
        store_updated = generateDistance(store);
        var sumArray = [];
        console.log("Gym updated",gym_updated);
        $("input[type='checkbox']").each(function () {
            $(this).is(":checked") == true ? inputArray.push(1) : inputArray.push(0);
        });
        for(var i = 0;i<gym_updated.length;i++) {
            temp = (gym_updated[i]*inputArray[0]);
            temp += (school_updated[i]*inputArray[1]);
            temp += (store_updated[i]*inputArray[2]);
            sumArray[i] = (temp);          
        }
        console.log(sumArray+"sumArray")         
        var min=Infinity;
        var minKey = 0;
        for(var i = 0;i<sumArray.length;i++) {
            if(min>sumArray[i] && min!=0){
                min = sumArray[i];
                minKey = i;
            }
        }
        // console.log(Buildings[minKey].name);
        if(min==0){
            $(".text").html("<h2>"+Buildings[minKey].name+"</h2>");
        }else if(inputArray){

        }
        // console.log(minKey+"minKey") 
        var equalVal = [],indexes= [],block;
        if(min!=0){
            for(var i = 0;i<gym_updated.length;i++) {
                if(sumArray[i] == min){
                a = gym_updated[i];
                    b= school_updated[i];
                    c = store_updated[i];
                    equalVal.push(Math.max(a,b,c));
                    console.log(equalVal);
                    indexes.push(i);
                }
            } 
            min=Math.min.apply(Math,equalVal);     
            min_index = equalVal.indexOf(min);
            block  = indexes[min_index];
            console.log(Buildings[block].name);
            equalVal = [];
            indexes = [];
            $(".text").html("<h2>"+Buildings[block].name+"</h2>");
            block = 0;
            // console.log(Buildings[block].name);
        }
        // console.log(Buildings[minKey].name);

    });
});
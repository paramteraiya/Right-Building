var maxa = [],indexes= [],build;
        if(min!=0){
            for(var i = 0;i<gym_updated.length;i++) {
                if(sumArray[i] == min){
                a = gym_updated[i];
                    b= school_updated[i];
                    c = store_updated[i];
                    maxa.push(Math.max(a,b,c));
                    console.log(maxa );
                    indexes.push(i);
                }
            } 
            min=Math.min.apply(Math,maxa);     
            min_index = maxa.indexOf(min);
            build  = indexes[min_index];
            console.log(Buildings[build].name);
            maxa = [];
            indexes = [];
            build = 0;
        }

        // if(inputArray[0]==0 && inputArray[1]==0 && inputArray[2]==0){
        //     // console.log("Batter you stay there!");
        //     $(".text").append("<h1>"+"Batter you stay there!"+"</h1>");
        // }else{
        //     $(".text").append("<h1>"+"Building-"+(minKey+1)+"</h1>");
        // }
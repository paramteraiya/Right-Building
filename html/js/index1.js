$(document).ready(function () {
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
            store : false
        },{
            name : 'Building 3',
            gym : true,
            school : true,
            store : false
        },{
            name : 'Building 4',
            gym : false,
            school : true,
            store : false
        },{
            name : 'Building 5',
            gym : false,
            school : true,
            store : true
        },
    ];
    var valueArray = ["name","gym","school","store"];
    var gym =[];
    var school =[];
    var store = [];
    // console.log(Buildings[0][valueArray[2]]);
    for(let i = 0; i < Buildings.length;i++){
        if(Buildings[i][valueArray[1]]==true){
            gym.push(1);
        }else{
            gym.push(0);
        }
    }
    console.log(gym);
    for(let i = 0; i < Buildings.length;i++){
        if(Buildings[i][valueArray[2]]==true){
            school.push(1);
        }else{
            school.push(0);
        }
    }
    console.log(school);
    for(let i = 0; i < Buildings.length;i++){
        if(Buildings[i][valueArray[3]]==true){
            store.push(1);
        }else{
            store.push(0);
        }
    }
    console.log(store);

    //input
    var inputArray = {};
    var flag = false;
    var distanceGym =[];
    var distanceSchool =[];
    var distanceStore = [];
    var val1=0;
    var val2=0;
    var inputValues = Object.values(inputArray);
  $("input[type='checkbox']").each(function () {
    inputArray[$(this).attr('id')] = false;
  });
  $("#submit").click(function () {
    $("input[type='checkbox']").each(function () {
        $(this).is(":checked") == true ? inputArray[$(this).attr('id')] = 1 : inputArray[$(this).attr('id')] = 0;
    });
    // gym distance array
    for(let i = 0; i < Buildings.length;i++){
        if(gym[i]!=1){
            for(let j=i;j< Buildings.length;j++){
                if(gym[j]==1){
                    val1 = j-i;
                    // distanceGym.push(j-i);
                    // console.log('building '+i+" distance="+(j-i));
                }
            }
            for(let j=i-1;j>0;j--){
                if(gym[j]==1){
                    val2 = i-j-1;
                    // distanceGym.push(i-j-1);
                    // console.log('building '+i+" distance="+(i-j-1));
                }
            }
            distanceGym.push(Math.min(val1,val2));
        }else{
            distanceGym.push(0);
            // console.log('building '+i+" distance=0");
        }
    }
    // console.log(distanceGym);


    // school distance array
    for(let i = 0; i < Buildings.length;i++){
        if(school[i]!=1){
            for(let j=i;j< Buildings.length;j++){
                if(school[j]==1){
                    val1 = j-i;
                    // distanceSchool.push(j-i);
                    // console.log('building '+i+" distance="+(j-i));
                }
            }
            for(let j=i-1;j>0;j--){
                if(school[j]==1){
                    val2 = i-j-1;
                    // distanceSchool.push(i-j-1);
                    // console.log('building '+i+" distance="+(i-j-1));
                }
            }
            distanceSchool.push(Math.min(val1,val2));
        }else{
            distanceSchool.push(0);
            // console.log('building '+i+" distance=0");
        }
    }
    // console.log(distanceSchool);


    // store distance array
    for(let i = 0; i < Buildings.length;i++){
        if(store[i]!=1){
            for(let j=i;j< Buildings.length;j++){
                if(store[j]==1){
                    distanceStore.push(j-i);
                    // console.log('building '+i+" distance="+(j-i));
                }
            }
            for(let j=i-1;j>0;j--){
                if(store[j]==1){
                    distanceStore.push(i-j-1);
                    // console.log('building '+i+" distance="+(i-j-1));
                }
            }
        }else{
            distanceStore.push(0);
            // console.log('building '+i+" distance=0");
        }
    }
    // console.log(distanceStore);
    console.log(inputArray);

   });
});

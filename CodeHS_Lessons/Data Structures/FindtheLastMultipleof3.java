public int findMultipleOfThree(int[] arr)
{
    int lastMulti = 0;
    
    for(int i = 0 ; i < arr.length; i++){
        if(i % 3 == 0){
            System.out.println(i);
            lastMulti = i;
        }
    }

    return lastMulti;

}
class Solution {
public:
    int maxVowels(string s, int k) {
        int n =s.size();
        int i=0;
        int j = k-1;
        int count =0;
        int max =0;

        for(int x =0; x<=j;x++){
            if(s[x]== 'a' || s[x]== 'e' || s[x]== 'i' || s[x]== 'o' || s[x]== 'u'){
                count+=1;
            }
        }
        max = count;
        while(j<n){
            if(s[i]== 'a' || s[i]== 'e' || s[i]== 'i' || s[i]== 'o' || s[i]== 'u'){
                count = count -1;
            }
            i=i+1;
            j=j+1;
            if(s[j]== 'a' || s[j]== 'e' || s[j]== 'i' || s[j]== 'o' || s[j]== 'u'){
                count = count +1;
            }

            if(max<count){
                max = count;
            }

        }

        return max;
    }
};
#include <iostream>
using namespace std;

int main() {
	// your code goes here
	// sum of that no. till the 1 and again sum and so on..........
	// 2 4 --- 1+2+3+4=10
	// again sum 1 to 10----- 1+2+3+4....+10
    int t;
    cin>>t;
    while(t--){
        int a;
	cin>>a;
	int b;
	cin>>b;
  	for(int k=1; k<=a; ++k){
  	    	int j=0;
	    for(int i=1; i<=b; ++i){
	        j+=i;
	    }
	    b=j;
	}
	cout<<b<<endl;
    }	
	return 0;
}

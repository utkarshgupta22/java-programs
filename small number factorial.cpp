#include <iostream>
using namespace std;
int factorial(int n){
    if(n>1)
    return n*factorial(n-1);
    else
    return 1;
}
int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--){
	    int n;
	    cin>>n;
	    int m = factorial(n);
	    cout<<m<<endl;
	}
	return 0;
}

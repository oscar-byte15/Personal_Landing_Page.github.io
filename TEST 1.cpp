#include <iostream>
#include <string>
using namespace std;

int main(){
cout<<"Hello world"<<endl;
cout<<"Ingrese su nombre: ";
string name;
getline(cin,name);

cout<<"Tu nombre es: "<<name<<endl;
return 0;
}
#include <stdio.h>


//
// The signed always gets promoted to the unsigned per 
//
int main() {

	int x = -10;
	unsigned int y = 5;

	if (x > y) {
		printf("no");
	}
	else {
		printf("does clang do this differently?");
	}

	return 0;
}
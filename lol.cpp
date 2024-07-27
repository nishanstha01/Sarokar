#include <stdio.h>

struct students {
	int roll;
	char name[];
};


int main() {
	struct students lol;
	printf("Enter your roll and name :");
	scanf("%d %s", &lol.roll, lol.name);
	printf("\n The roll and name is : %d \t,%s", lol.roll, lol.name);
	return 0;
}
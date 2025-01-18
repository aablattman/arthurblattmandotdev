#include <stdio.h>
#include <stdbool.h>


#define LIST_SIZE 1000


//
// Selection Sort O(n^2)
//
int main() {

	FILE *rnd_ints;
	char rnd_ints_filename[50] = "random_integers.txt";
	int int_arr[LIST_SIZE];

	int n_swaps, sort_buff;
	int i = 0;

	bool is_sorted = false;


	rnd_ints = fopen(rnd_ints_filename, "r");
	if (rnd_ints == NULL) {
		printf("Error opening file: %s", rnd_ints_filename);
		return 1;
	}

	while(fscanf(rnd_ints, "%d", &int_arr[i]) != EOF) {
		i++;

		if(i >= LIST_SIZE) {
			break;
		}
	}

	fclose(rnd_ints);


	while(!is_sorted) {
		n_swaps = 0;

		for (int j = 0; j < LIST_SIZE -1; j++) {
			if (int_arr[j]  > int_arr[j+1]) {
				sort_buff = int_arr[j];
				int_arr[j] = int_arr[j+1];
				int_arr[j+1] = sort_buff;

				n_swaps++;
			}
		}

		if (n_swaps == 0) {
			is_sorted = true;
		}
	} 


	printf("First 10 sorted\n");
	for(int l = 0; l < 10; l++) {
		printf("%d\n", int_arr[l]);
	}


	return 0;
}
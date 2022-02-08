export const swExpertAcademyPythonTemplate = () => `
import sys
sys.stdin = open("input.txt", "r")

T = int(input())
for test_case in range(1, T + 1):
  pass
`

export const swExpertAcademyJavaTemplate = () => `
import java.util.Scanner;
import java.io.FileInputStream;

class Solution
{
	public static void main(String args[]) throws Exception
	{
		System.setIn(new FileInputStream("res/input.txt"));
		Scanner sc = new Scanner(System.in);
		
    int T;
		T=sc.nextInt();
		
    for(int test_case = 1; test_case <= T; test_case++)
		{ }
	}
}
`

print("Title: Bracket Stack")

def findComplimentBracket(c):
	openBracket = ['(','[','{']
	closeBracket = [')',']','}']
	return closeBracket[openBracket.index(c)]

def isBracket(c):
	openBracket = ['(','[','{']
	closeBracket = [')',']','}']
	for i in openBracket:
		if(i==c):
			return 1;
	for i in closeBracket:
		if(i==c):
			return 2;
	return 0;

def bracketstack(myString):
	stack = []
	for myChar in myString:
		if(isBracket(myChar)==1):
			stack.append(myChar)
			print("Adding bracket ",myChar," to stack: ", stack)
		elif(isBracket(myChar)==2):
			poppedBracket = stack.pop(-1)
			if(findComplimentBracket(poppedBracket) != myChar):
				print("Uneven usage of brackets, used ", myChar, " after ",poppedBracket)
				return
			else:
				print("Popping bracket ",poppedBracket," from stack: ", stack)
	print("End of string")
	return

print("Set #1")
bracketstack("(A + B) + {D  + [E + F]}")
print("Set #2")
bracketstack("(A + B]")
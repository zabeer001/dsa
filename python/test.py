def isPalindrome(s):
    reversed_str = s[::-1]
    if reversed_str == s:
        return f"{s} is a palindrome number"
    else:
        return f"{s} is not a palindrome number"
s = input()
print(isPalindrome(s))
n = int(input())
count = 0
for i in range(n):
    bitland = input()
    if '+' in bitland:
        count += 1
    else:
        count -= 1
print(count)


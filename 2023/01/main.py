input = open("real_input.txt", "r")

lines = input.readlines()

num_str = ''
nums = []

for line in lines:  # iterate over all lines in file
    for char in line:  # iterate over all characters in a line
        if char.isdigit():
            num_str += char

    num_str = num_str[0]+num_str[-1]
    nums.append(int(num_str))
    num_str = ''  # clear num_str after each line

print(nums)
print(sum(nums))

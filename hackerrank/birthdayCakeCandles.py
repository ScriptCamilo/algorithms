# https://www.hackerrank.com/challenges/birthday-cake-candles/problem

def birthdayCakeCandles(candles: 'list[int]') -> int:
    tallestNumber = float('-inf')
    tallestCount = 0

    for x in candles:
        if x > tallestNumber:
            tallestNumber = x
            tallestCount = 1
        elif x == tallestCount:
            tallestCount += 1

    return tallestCount

candlesExample = [3, 2, 1, 3]
print(birthdayCakeCandles(candlesExample)) # output 2

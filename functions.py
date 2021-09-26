class MinStack:

    def __init__(self):
        self.stack = []
        self._min = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if len(self._min) == 0 or (self._min[len(self._min) - 1] >= val):
            self._min.append(val)

    def pop(self) -> None:
        x = self.stack.pop()
        if x == self.getMin():
            self._min.pop()

    def top(self) -> int:
        return self.stack[len(self.stack) - 1]

    def getMin(self) -> int:
        return self._min[len(self._min) - 1]

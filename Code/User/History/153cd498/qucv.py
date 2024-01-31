class Node:
    # Root Node Constructor
    # Children is a tuple of type (Node, Node)
    def __init__(self, data: any, children: (any, any)):
        self._data = data
        self._children = children

    def getData(self):
        return self._data
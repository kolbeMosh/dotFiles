class Node:
    # Root Node Constructor
    # Children is a tuple of type (Node, Node)
    def __init__(self, val: any, children: (any, any)):
        self._val = val
        self._children = children
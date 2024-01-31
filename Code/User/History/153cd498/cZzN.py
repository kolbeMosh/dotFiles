class Tree:
    # Root Node Constructor
    # Children is a tuple of type (Node, Node) or type (Node, None) or (None, Node)
    def __init__(self, data: any, children: (any, any)):
        self._parent = None
        self._data = data
        self._children = children

    # Child Node Constructor
    # Parent is a Node Obj
    # Children is a tuple of type (Node, Node) or type (Node, None) or (None, Node)
    def __init__(self, parent: any, data: any, children: (any, any)):
        self._parent = parent
        self._data = data
        self._children = children

    def getData(self):
        return self._data

    def getLeftChild(self):
        leftChild = self._children[0]
        if leftChild != None:
            return leftChild
        else:
            raise Exception("LEFT CHILD IS UNDEFINED")
    
    def getRightChild(self):
        rightChild = self._children[1]
        if rightChild != None:
            return rightChild
        else:
            raise Exception("RIGHT CHILD IS UNDEFINED")
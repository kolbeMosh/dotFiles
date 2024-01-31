class Node:
    # Root Node Constructor
    # Children is a tuple of type (Node, Node) or type (Node, None) or (None, Node)
    def __init__(self, data: any, children: (any, any)):
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
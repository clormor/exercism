class Matrix:
    def __init__(self, matrix_string):
        self.rows=[]
        for row_string in matrix_string.split('\n'):
            self.rows.append([int(n) for n in row_string.split()])

    def row(self, index):
        return self.rows[index - 1]

    def column(self, index):
        return [row[index - 1] for row in self.rows]

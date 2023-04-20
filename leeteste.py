f1, f2, x = 'A maçã é doce', 'A maçã é azeda', []
for i in f1.split():
    if i not in f2:
        x.append(i)
for j in f2.split():
    if j not in f1:
        x.append(j)
print(x)
/home/alunos/PycharmProjects/pythonProject9

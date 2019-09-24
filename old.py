def to_num(letter):
  return ord(letter) - 64

def to_letter(num):
  return str(chr(int(num + 64)))

def print_list_to_letter(nums_list):
  new = map(to_letter, nums_list)
  print(' '.join(map(str, new)))

def list_to_num(letter_list):
  new = map(to_num, letter_list)
  return new

nums = [2,16,19,14,19,10,18,14,24,16,18,3,8,13,10,3,14,10,24,3,10,22,21,24]
print('Frase original criptografada: ')
print_list_to_letter(nums)
print('-----------------------------------------------')

letras = []
for num in nums:
    i = 1
    while True:
        if (num - 4 + i * 26) % -5 == 0:
            result = (num - 4 + i * 26) / -5
            while result < 0:
                result += 26
            letras.append(result)
            break;
        i +=1
print('Congruência(F(x) = -5x + 4) reversa: ')
print_list_to_letter(letras)
print('-----------------------------------------------')

cifras = []
for letra in letras:
    result = letra - 3
    if result < 0:
        result +=26
    cifras.append(result)
print('Cifração de cesar padrão reversa:')
print_list_to_letter(cifras)
print('-----------------------------------------------')

a = []
b = []
c = []
for pos in range(0,len(cifras),3):
    a.append(cifras[pos])
    b.append(cifras[pos+1])
    c.append(cifras[pos+2])

print('Transposição de CH 8 reversa:')
transp_result = a + b + c
print_list_to_letter(transp_result)
print('-----------------------------------------------')

print('Permutação(P = 625314) reversa:')
perm = [6,2,5,3,1,4]
p_rev = [0,0,0,0,0,0]
for i, valor in enumerate(perm):
  p_rev[i] = perm.index(i + 1) + 1
print('P - 1: ' + ''.join(map(str,p_rev)))

result_perm = []
for i in range(0, len(transp_result), len(perm)):
  temp = [0,0,0,0,0,0]
  sliced = transp_result[i : i + len(perm)]
  for i2 in range(len(p_rev)):
    temp[i2] = sliced[p_rev[i2] - 1]
  result_perm += temp
print_list_to_letter(result_perm)

print('-----------------------------------------------')
print('Texto claro:')
print_list_to_letter(result_perm)
print('-----------------------------------------------')
print('A)Transposição de CH=8 do texto claro:')

a2 = []
b2 = []
c2 = []
for pos in range(0,len(cifras),3):
    a2.append(result_perm[pos])
    b2.append(result_perm[pos+1])
    c2.append(result_perm[pos+2])

result2 = a2 + b2 + c2
print_list_to_letter(result2)
print('-----------------------------------------------')
print('B)Permutação P=625314 do texto claro:')
permutacao_p = [6,2,5,3,1,4]
result_permutacao = []

for i in range(0, len(result_perm), len(permutacao_p)):
  temp = [0,0,0,0,0,0]
  sliced = result_perm[i : i + len(permutacao_p)]
  for i2 in range(len(permutacao_p)):
    temp[i2] = sliced[permutacao_p[i2] - 1]
  result_permutacao += temp
  
print_list_to_letter(result_permutacao)
print('-----------------------------------------------')
print('C)Hash do texto claro:')
print('Retirando as letras repetidas:')
sem_repeticoes = {}

for letter in result_perm:
  if letter not in sem_repeticoes.keys():
    sem_repeticoes[letter] = 0
  else:
    sem_repeticoes[letter] += 1

sem_repeticoes_lista = []

for key in sem_repeticoes.keys():
  if sem_repeticoes[key] % 2 == 0:
    sem_repeticoes_lista.append(key)
    
sem_repeticoes_lista = sorted(sem_repeticoes_lista)

print_list_to_letter(sem_repeticoes_lista)
binaries = []
print('Binários:')
for letter in sem_repeticoes_lista:
  print(to_letter(letter), end='')
  print(' - ', end='')
  letter_binary = '{0:08b}'.format(int(letter + 64))
  
  binaries.append(letter_binary)

  print(letter_binary)

print('Hash:')

rash = []
for pos in range(len(binaries[0])):
  count = 0
  for letter in binaries:
    if letter[pos] == '1':
      count += 1

  if count % 2 == 0 and count >= 0:
    rash.append('0')
  else:
    rash.append('1')

hash_em_string = ''.join(rash)

print('Resultado: ', end='')
print(hash_em_string)
print('Em decimal:', end='')
print(int(hash_em_string, 2))
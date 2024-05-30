.class public Hiram 
.super java/lang/Object

.method public static main([Ljava/lang/String;)V
.limit stack 10
.limit locals 10
bipush 5
istore_0

bipush 0
istore_1

bipush 0
istore_2

iload_0
ldc 0
if_icmpgt L0
goto L1
L0:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es positivo.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto L1

L1:

ldc 1
ldc 0
if_icmpeq L6
L11:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es impar.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto L7
L6:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es par.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto L7

L7:

iload_0
ldc 0
if_icmpgt L12
iload_0
ldc 0
if_icmplt L15
L17:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es cero.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto L13
L12:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es positivo.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto L13
L15: 
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "El número es negativo.\n"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V

L13:

L19: 
iload_1
iload_0
if_icmpgt L20
iload_2
iload_1
iadd
istore_2

iinc 1 1

goto L19
L20:

getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "La suma de los primeros números naturales es:"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
getstatic java/lang/System/out Ljava/io/PrintStream;
iload_0
invokevirtual java/io/PrintStream/println(I)V

getstatic java/lang/System/out Ljava/io/PrintStream;
iload_2
invokevirtual java/io/PrintStream/println(I)V

return
.end method
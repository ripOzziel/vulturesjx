.class public Hiram 
.super java/lang/Object

.method public static main([Ljava/lang/String;)V
.limit stack 10
.limit locals 10
bipush 11
istore_0

iload_0
ldc 10
if_icmpeq L0
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "No es 10"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto L1
L0:
getstatic java/lang/System/out Ljava/io/PrintStream;
iload_0
invokevirtual java/io/PrintStream/println(I)V

goto L1

L1:

return
.end method
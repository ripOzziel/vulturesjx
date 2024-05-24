.class public Hiram 
.super java/lang/Object

.method public static main([Ljava/lang/String;)V
.limit stack 10
.limit locals 10
bipush 1
istore_0

L0: 
iload_0
ldc 10
if_icmpge L1
iload_0
ldc 8
if_icmpeq L2
goto L3
L2:
getstatic java/lang/System/out Ljava/io/PrintStream;
ldc "ola"
invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V
goto L3

L3:

iinc 0 1

goto L0
L1:

return
.end method
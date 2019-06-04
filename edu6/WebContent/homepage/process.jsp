<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>process jsp</title>
</head>
<body>

	<h2><%=request.getParameter("id")%></h2>
	<h2><%=request.getParameter("pw")%></h2>
	
	<h1>처리 되었습니다.</h1>
</body>
</html>
<!-- jsp파일은 반드시 Tomcat서버가 구동중이어야 한다. -->
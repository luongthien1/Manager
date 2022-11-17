<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String username = request.getParameter("username");
		String address = String.valueOf(request.getAttribute("address"));
		String temp = String.valueOf(request.getAttribute("temp"));
	%>
	
	Welcome = <%=username %><br>
	You are Living at: <%=address %> <br>
	Temp : <%=temp %>
</body>
</html>
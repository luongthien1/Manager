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
		String password = request.getParameter("password");
		
		String address = "192 Nguyen Luong Bang";
		
		if ("Chi pheo".equals(username) && (!"Thi no".equals(password))) {
			request.setAttribute("address", address);
			RequestDispatcher rd = request.getRequestDispatcher("welcome.jsp");
			rd.forward(request, response);
		} else {
			response.sendRedirect("Login.jsp");
		}
	%>
</body>
</html>
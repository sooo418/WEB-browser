<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
//자바 코드가 들어갈 공간
	int p1 = Integer.parseInt(request.getParameter("p1"));
	int p2 = Integer.parseInt(request.getParameter("p2"));
	
	int result = p1+p2;
	
	//Thread.sleep(9000);
	//jsp에 정보가 들어온 후 9초 동안 블락시키고 작동한다.
%>

{
	"result" : <%= result %>,
	"p1" : <%= p1 %>,
	"p2" : <%= p2 %>
}

package eureka_consumer.entity;

import org.springframework.stereotype.Component;

@Component
public class Project {
private int index;
private String name;
private String contest;
private int number;
private int money;
public int getIndex() {
	return index;
}
public void setIndex(int index) {
	this.index = index;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getContest() {
	return contest;
}
public void setContest(String contest) {
	this.contest = contest;
}
public int getNumber() {
	return number;
}
public void setNumber(int number) {
	this.number = number;
}
public int getMoney() {
	return money;
}
public void setMoney(int money) {
	this.money = money;
}
}

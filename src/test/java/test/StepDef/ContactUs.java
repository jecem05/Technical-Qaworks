package test.StepDef;

import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import test.pageObject.Contact_Us_Page;
import utility.Manage_Driver;

public class ContactUs extends Manage_Driver {
	
	WebDriver driver;
	Contact_Us_Page ContactUs_Steps = new Contact_Us_Page();
	Manage_Driver Selected_Browser = new Manage_Driver();
	
	
    @Before
	public void start_session(){
	Selected_Browser.set_driver("chrome");
	Selected_Browser.browser_setting();
}


    @Given("^I am on the \"([^\"]*)\"$")
    public void i_am_on_the(String text) throws Throwable {
	switch (text) {
	case"Landing Page":
		ContactUs_Steps.launch_browser();
		ContactUs_Steps.assert_text("Home Page - QAWorks");
		break;
	case "Home":
		 Thread.sleep(5000);
		 ContactUs_Steps.assert_text("Contact");
		break;
	default:
		break;
	}
}


@When("^I click on \"([^\"]*)\" tab$")
public void i_click_on_tab(String tab) throws Throwable {
	ContactUs_Steps.click_contact_tab();
}


@When("^\"([^\"]*)\" is displayed$")
public void is_displayed(String text) throws Throwable {
	ContactUs_Steps.assert_text("Contact Us - QAWorks");
}



@Then("^I should be able to contact QAWorks with the following information$")
public void i_should_be_able_to_contact_QAWorks_with_the_following_information(DataTable contact_details) throws Throwable {
	ContactUs_Steps.contact_us_filling_details(contact_details);
}


@After
public void CloseSession(){
	Selected_Browser.close_browser();
}


}

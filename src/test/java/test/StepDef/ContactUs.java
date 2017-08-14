package test.StepDef;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import test.pageObject.Contact_Us_Page;
import utility.Manage_Driver;

public class ContactUs extends Manage_Driver {
	
	WebDriver driver;
	Contact_Us_Page ContactUs_steps = new Contact_Us_Page();
	Manage_Driver selected_browser = new Manage_Driver();
	
	
@Before
	
	public void start_session(){
	selected_browser.set_driver("firefox");
	selected_browser.browser_setting();
}


@Given("^I am on the \"([^\"]*)\" page$")
public void i_am_on_the_page(String text) throws Throwable {
	
	switch (text) {
	case"Landing":
		ContactUs_steps.launch_browser();
		ContactUs_steps.assert_text("Home Page - QAWorks");
		break;
	case "Home":
		 Thread.sleep(5000);
		 ContactUs_steps.assert_text("Contact");;
		break;
	default:
		break;
	}
}


@Given("^I click on \"([^\"]*)\" link$")
public void i_click_on_link(String arg1) throws Throwable {
	ContactUs_steps.click_contact_link();
   
}

@Then("^I should be able to contact QAWorks with the following information$")
public void i_should_be_able_to_contact_QAWorks_with_the_following_information(DataTable contact_details) throws Throwable {
	ContactUs_steps.contact_us_filling_details(contact_details);
}



}

package test.pageObject;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;

import cucumber.api.DataTable;
import utility.Manage_Driver;

public class Contact_Us_Page extends Manage_Driver {

	By Contact_tab = By.xpath("//*[@id='menu']/li[1]/a");
	By Table_name = By.id("ctl00_MainContent_NameBox");
	By Table_email = By.id("ctl00_MainContent_EmailBox");
	By Table_message = By.id("ctl00_MainContent_MessageBox");

	public void launch_browser() {
		driver.get("http://qaworks.com/");
	}

	public void click_contact_tab() throws Exception {
		driver.findElement(Contact_tab).click();
	}
	
    // Helper class, which can be re-usable across the project
	public void assert_text(String text) {
		String Main_title = driver.getTitle();
		String Expected_Title = text;
		Assert.assertEquals(Main_title, Expected_Title);
	}

	public void contact_us_filling_details(DataTable contact_details) throws InterruptedException {
		List<List<String>> data = contact_details.raw();
		driver.findElement(Table_name).sendKeys(data.get(0).get(0));
		driver.findElement(Table_email).sendKeys(data.get(0).get(1));
		driver.findElement(Table_message).sendKeys(data.get(0).get(2));
	}
	
	
		
	
}

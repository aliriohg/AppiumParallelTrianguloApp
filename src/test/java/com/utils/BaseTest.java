package com.utils;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Path;
import java.nio.file.Paths;

public class BaseTest {


    protected DesiredCapabilities getCaps() throws Exception {
        throw new Exception("Must implement getCaps");
    }

    public void setUp() throws Exception {
        URL server = new URL("http://localhost:4723/wd/hub");
        ThreadLocalDriver.setTLDriver(new AndroidDriver<MobileElement>(server, getCaps()));
    }



    public Path getResource(String fileName) throws URISyntaxException {
        URL refImgUrl = getClass().getClassLoader().getResource(fileName);

        return Paths.get(refImgUrl.toURI()).toFile().toPath();
    }
    public void tearDown() {
        if (ThreadLocalDriver.getTLDriver() != null) {
            ThreadLocalDriver.getTLDriver().quit();
        }
    }


}

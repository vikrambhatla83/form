QUnit.config.autostart = false;
$.fn.ajaxSubmit.debug = true;

$(document).ready(function() {
    $("#forms-ready").click(function(e) {
        e.preventDefault();
        QUnit.start();
    });
});
/*
asyncTest("upload 1 file", function() {
    var beforeSendCalled = 0;
    var f = $("#form1").ajaxSubmit(
        {
            dataType: 'json',
            beforeSend: function(xhr, options) {
                beforeSendCalled++;
                ok(xhr, "beforeSend xhr ok");
                ok(options, "beforeSend options ok");
            },
            success: function(data) {
                start();
                ok(true, "fine");
                equal(beforeSendCalled, 1, "beforeSend called");
                ok(data.files.upload, "file uploaded");
                equal(data.files.upload.error, 0, "file uploaded without errors");
            },
            error: function() {
                start();
                ok(false, "test failed")
            }
        });
});

asyncTest("upload error when wrong datatype", function() {
    var f = $("#form1").attr('action', '404.php').ajaxSubmit(
        {
            dataType: 'json',
            success: function(data) {
                start();
                ok(false);
            },
            error: function() {
                start();
                ok(true, "error");
            }
        }).attr('action', 'successupload.php');
});

asyncTest("upload with iframe forced: iframe = true", function() {
    var f = $("#form1").ajaxSubmit(
        {
            dataType: 'json',
            iframe : true,
            success: function(data) {
                start();
                ok(true);
                ok(data.files.upload);
            },
            error: function() {
                start();
                ok(false, "test failed")
            }
        });
});

asyncTest("upload with extra params", function() {
    var f = $("#form1").ajaxSubmit(
        {
            dataType: 'json',
            iframe : true,
            data: {chuck: "norris"},
            success: function(data) {
                start();
                ok(true);
                ok(data.files.upload);
                equal(data.post.chuck, "norris");
            },
            error: function() {
                start();
                ok(false, "test failed")
            }
        });
});
*/
asyncTest("upload 1 file and got at least a progress event ", function() {
    var beforeSendCalled = 0;
    var f = $("#form1").ajaxSubmit(
        {
            dataType: 'json',
            beforeSend: function(xhr, options) {
                beforeSendCalled++;
                ok(xhr, "beforeSend xhr ok");
                ok(options, "beforeSend options ok");
            },
            success: function(data) {
                start();
                ok(true, "fine");
                equal(beforeSendCalled, 1, "beforeSend called");
                ok(data.files.upload, "file uploaded");
                equal(data.files.upload.error, 0, "file uploaded without errors");
            },
            error: function() {
                start();
                ok(false, "test failed")
            },
            progress: function(position, size) {
                start();
                ok(true, "No progress event received");
                console.log("position : " + position + " size : " + size)
            }
        });
});


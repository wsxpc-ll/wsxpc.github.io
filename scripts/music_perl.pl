#!/usr/bin/perl
use strict;
use warnings;

# 设置音乐文件目录
my $music_directory = '../music';

# 打开音乐目录
opendir(my $dh, $music_directory) or die "无法打开目录 $music_directory: $!";

# 读取目录中的文件
my @files = readdir($dh);
closedir $dh;

# 初始化计数器
my $count = 1;

# 遍历文件
foreach my $file (@files) {
    next if $file =~ /^\./;  # 跳过隐藏文件和父目录

    my $old_file = "$music_directory/$file";
    my $file_extension = ($file =~ /(\.[^.]+)$/)[0];  # 获取文件扩展名
    my $new_file = "$music_directory/music$count$file_extension";

    # 重命名文件
    rename $old_file, $new_file or die "无法重命名 $old_file 为 $new_file: $!";
    print "重命名 $old_file 为 $new_file\n";

    $count++;
}

print "完成重命名\n";

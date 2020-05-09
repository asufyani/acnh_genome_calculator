use JSON;
my $csv = 'data.csv';
open(FH, '<', $csv) or die $!;
my @rows = <FH>;
close(FH);
use Data::Dumper;
sub rtrim { my $s = shift; $s =~ s/\s+$//;       return $s };
@rows = map { rtrim($_) } @rows;
@rows = map { [split(',',$_)] } @rows;

warn Dumper(\@rows);
my $output = {};
foreach my $row (@rows) {
    my @parts = split(" ",$row->[2]);
    my $color = $parts[0];
    $output->{$row->[0]}->{genomes}->{$row->[1]}->{color} = $color;
    if ($parts[1] =~/\((\S*)\)/) {
        my $variant = $1;
        $output->{$row->[0]}->{genomes}->{$row->[1]}->{$variant} = 1;
        $output->{$row->[0]}->{$variant}->{$color} = $row->[1];
    }
    
}
warn Dumper($output);

my $json = JSON->new->allow_nonref;

my $json_text = $json->encode( $output );
 warn Dumper($json_text);
 open(FH, '>', 'flowers.json') or die $!;
 print FH $json_text;
 close(FH);